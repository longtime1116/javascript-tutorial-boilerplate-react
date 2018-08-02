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

// apply もしくは bind のコメントアウトを消さない場合はエラーになる。
// なぜなら、foo の print のみを抜き出してしまっており this とは？となるから
print();
