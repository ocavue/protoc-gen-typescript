package internal

import (
	"fmt"

	"github.com/jhump/protoreflect/desc"
)

func (g *Generator) generateService(service *desc.ServiceDescriptor, params *Parameters) {
	g.W(fmt.Sprintf("export interface %sService {", service.GetName()))
	g.incIndent()
	g.generateServiceMethods(service, params)
	g.decIndent()
	g.W(fmt.Sprintf("}"))
}

func (g *Generator) generateServiceMethods(service *desc.ServiceDescriptor, params *Parameters) {
	for _, m := range service.GetMethods() {
		g.generateServiceMethod(m, params)
	}
}
func (g *Generator) generateServiceMethod(method *desc.MethodDescriptor, params *Parameters) {
	i := method.GetInputType().GetName()
	o := fmt.Sprintf("{ response: %s, code: number, message: string, detail: any }", method.GetOutputType().GetName())
	if params.AsyncIterators {
		if method.IsServerStreaming() {
			o = fmt.Sprintf("AsyncIterator<%s>", o)
		}
		if method.IsClientStreaming() {
			i = fmt.Sprintf("AsyncIterator<%s>", i)
		}
		g.W(fmt.Sprintf("%s: (r:%s) => %s;", method.GetName(), i, o))
	} else {
		ss, cs := method.IsServerStreaming(), method.IsClientStreaming()
		if !(ss || cs) {
			g.W(fmt.Sprintf("%s: (r:%s) => %s;", method.GetName(), i, o))
			return
		}
		if !cs {
			g.W(fmt.Sprintf("%s: (r:%s, cb:(a:{value: %s, done: boolean}) => void) => void;", method.GetName(), i, o))
			return
		}
		if !ss {
			g.W(fmt.Sprintf("%s: (r:() => {value: %s, done: boolean}) => %s;", method.GetName(), i, o))
			return
		}
		g.W(fmt.Sprintf("%s: (r:() => {value: %s, done: boolean}, cb:(a:{value: %s, done: boolean}) => void) => void;", method.GetName(), i, o))
	}
}
