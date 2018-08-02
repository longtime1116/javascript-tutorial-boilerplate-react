class Foo {
  x: number;
  constructor() {
    this.x = 1;
    //this.print = this.print.bind(this);
  }

  print() {
    console.log(this.x);
  }
}

const foo = new Foo();

foo.print();

const print = foo.print;

// print.apply(foo);
print();
