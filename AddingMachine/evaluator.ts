
export class Evaluator{
   ops: string[] = [];
   vals: number[] = []; 
    
   public Calculate() { }
    
   calcs(toEvaluate: string) {

        const tokens = toEvaluate.split(' ');
        for (const token of tokens)
         {
            if      (token === ("(")){}
            else if (token ===("+"))    {this.ops.push(token)}
            else if (token === ("-"))    {this.ops.push(token)}
            else if (token ===("*"))    {this.ops.push(token)}
            else if (token === ("/"))    {this.ops.push(token)}
            else if (token === ("sqrt")) {this.ops.push(token)}
            else if (token ===(")")) {
                let op = this.ops.pop()
                let v = this.vals.pop()
                if      (op===("+"))    v = this.vals.pop() + v
                else if (op===("-"))    v = this.vals.pop() - v
                else if (op===("*"))    v = this.vals.pop() * v
                else if (op===("/"))    v = this.vals.pop() / v
                else if (op===("sqrt")) v = Math.sqrt(v)
                this.vals.push(v);
            }
            else this.vals.push(parseFloat(token));
        }
        return this.vals.pop();
    }
}