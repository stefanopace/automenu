const { SimpleNode } = require('./simple-node');

class LeafNode extends SimpleNode{
	constructor(runner, parentNode, matchers, command){
		super(runner, null, null, parentNode, null, matchers)
		this.command = command;
	}

	resolve (parameters) {
		return this.runner.runAndShowOutput(this.command, parameters);
	}
}

module.exports = {
	LeafNode
}
