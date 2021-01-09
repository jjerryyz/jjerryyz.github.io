(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{387:function(t,s,a){"use strict";a.r(s);var n=a(7),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),a("h2",{attrs:{id:"符号和模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#符号和模型"}},[t._v("#")]),t._v(" 符号和模型")]),t._v(" "),a("p",[t._v("在程序中我们经常会看到各种数字、变量、函数等东西，比如最简单的，")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("这些东西都是一个个的符号，它们在程序里面有自己的含义，这里我们还不需要深究")]),t._v(" "),a("p",[t._v("我们使用符号最本质的需求就是要表达某个计算过程，比如说我想要表达 4 + 3 这样一个计算过程，我们脑海中会出现下面这样一个图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/04/30/XLxz7bMDYiBdRlw.png",alt:"clipboard.png"}})]),t._v(" "),a("p",[t._v("这就是一个建模的过程，我们使用 4 3 + 这些符号建立了一个 4+3 这样一个计算模型，当然，现实肯定不存在这么简单的模型，但我们这里先不继续展开")]),t._v(" "),a("h2",{attrs:{id:"表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[t._v("#")]),t._v(" 表达式")]),t._v(" "),a("p",[t._v("前面我们说 4 + 3 这样的形式是在建模，在计算机科学里面我们称之为表达式，我们还不需要对表达式进行定义，而是要知道哪些东西是表达式：")]),t._v(" "),a("ol",[a("li",[t._v("单纯的数字、字符串")]),t._v(" "),a("li",[t._v("像 4 + 3 这样的计算过程")]),t._v(" "),a("li",[t._v("两个表达式组合起来运算，也是表达式")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/04/30/1e6tuosX25lW4N8.png",alt:"clipboard2.png"}})]),t._v(" "),a("p",[t._v("表达式的定义实际上是一种递归定义，意思是定义里面使用的概念包含了其本身，可以理解为表达式是可以嵌套使用的")]),t._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("如果你有一个很复杂的表达式，如 (5 - 3) * (4 + (2 * 3 - 5) * 6)\n由于人的眼力是有限的，我们不希望每次都去理解那么大一串字符，我们希望把这个过程分割成简单的步骤\n我们会先算 (5-3)，然后算 (2 * 3 - 5)，然后再算前面结果乘以 6...\n我们会发现我们需要一个东西来暂时存放前面的结果，这个东西在计算机科学里面就叫做变量，现在我们可以这样来写:")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" c\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("a、b、c、d 这些符号就是变量，我们这里是定义成 a、b、c、d，但实际上它们叫什么都没关系，只要不要重复就可以了，因为重复会带来混淆，如果需要更进一步的要求的话，就是需要命名为容易看懂的单词，这样我们再次看程序时就很快的理解这段代码的意思了")]),t._v(" "),a("p",[t._v("在这里我们还看到一个符号 {}，在不同的语言里面都有类似的符号，他们的作用就是分界符，代表括号里面的是一整块逻辑，通常这块逻辑的输出结果都凝聚在最后一句话")]),t._v(" "),a("p",[t._v("在这里，我们对程序有了一个印象上的概念，一个由逻辑组合起来的聚合体，这些逻辑就像一个个黑盒子，我们给它输入，然后它会给我们输出，将这些黑盒子用电线连起来，就构成一个有复杂功能的程序了，有了这个印象后，理解函数就不会有困难了。")]),t._v(" "),a("p",[t._v("计算机科学经常会挪用人的概念，变量也是一样。我们说变量是有生命的，也可以理解为变量是有作用范围的\n我们希望变量只活在同一块逻辑里面，以上面的算术表达式为例子，a只有在 {} 里面才有意义，{} 以外计算机根本就不知道 a 是什么")]),t._v(" "),a("h2",{attrs:{id:"语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语句"}},[t._v("#")]),t._v(" 语句")]),t._v(" "),a("p",[t._v("语句和所有语言一样，就是一句完整的句子\n前面在说变量的时候我有意隐藏了一个区别：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个表达式，只是表达了一个计算，但实际什么都没做，因为它没有把结果告诉计算机（或者说没有告诉计算机要把结果放哪里）")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是一个语句（赋值语句），它告诉计算机要把 4 + 3 这个表达式的结果放到 a 里面了")]),t._v("\n")])])]),a("p",[t._v("程序里面实际起作用的是语句")]),t._v(" "),a("p",[t._v("一般我们通过作为一句话的结尾，当然也有像 python 一样，不需要指定；直接换行就代表下一句的编程语言")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是第一个语句")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这是第二个语句")]),t._v("\n")])])]),a("p",[t._v("有些语句会占用几行，它们结合起来才是有意义的表述，比如说，")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个if else 语句占用了5行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("if (b) {...} else {...} // 当然我们也可以在一行内写完")]),t._v(" "),a("p",[t._v("同样的还有 while for 等语句")]),t._v(" "),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),a("p",[t._v("我们把一些逻辑单独拿出来，并给它起一个名字，这样形成的东西就是函数。\n想象一个庞大的系统，比如说计算机，计算机里面有很多子系统，比如说显示系统，输入系统，这些系统类比到程序里面就是一个个具有各自功能的函数。")]),t._v(" "),a("p",[t._v("当然，一个函数经常需要你输入一些东西，它才能输出一些结果，比如一个完成加法的函数:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里我不关心具体使用哪种语言，所有语言都是类似的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("num1，num2 是输入，本质上就是一个变量，变量的一些特性在这里同样通用，比如说，我们不在乎变量具体叫什么名字，下面的函数和上面函数时等价的:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们给函数起了个名字叫做 add，因为这样更方便我们使用，比如说你在使用计算机的时候，想要使用显示系统，不会说想要使用“由电子打印到屏幕产生不同颜色的系统”")]),t._v(" "),a("p",[t._v("我们已经定义好了函数 add，接下来就可以在别的地方使用它:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用函数的时候，我们要告诉它具体输入是什么，计算机才能知道函数里面的符号代表什么意思，在这里我们调用 add 的时，告诉了计算机 num1 = 1, num2 = 2，这样计算机在 add 函数里面就可以用这两个值来计算 num1 + num2了")]),t._v(" "),a("h2",{attrs:{id:"分支、循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支、循环"}},[t._v("#")]),t._v(" 分支、循环")]),t._v(" "),a("p",[t._v("我们在说语句的时候，提到了 if-else 语句、while 语句等\n我们使用这些语句来描述一些通用的逻辑，比如:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个 if-else 语句表达了这样一个逻辑，如果今天天气很热，我就想吃凉皮，否则，我就想吃牛肉，也就是所谓的分歧")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("今天天气很热"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    我想吃凉皮\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    我想吃牛肉\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个 while 语句表达了这样一个逻辑，如果水温不够高，我就继续加热，知道水温大于或等于 60 度为止")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("水温小于"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("度"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    测试加热\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"声明、实现、调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明、实现、调用"}},[t._v("#")]),t._v(" 声明、实现、调用")]),t._v(" "),a("ol",[a("li",[t._v("声明就是告诉计算机，我接下来可能会用到这些符号，你先帮我创建这些符号，这个时候我们不需要告诉计算机这些符号具体做什么，只需要告诉它有就行，比如")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test.c")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个变量，不设置值（不告诉计算机这个符号有什么用）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个函数，同样不告诉计算机作用")]),t._v("\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("实现就是把之前声明的符号赋予真正的意义")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test.c")]),t._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("区分了声明和实现我们就可以信息屏蔽和抽象，这一点我们到此还不需要继续深入\n3. 调用就是使用，之前声明和实现是在创造一些符号，只有我们真正的调用它，这些符号才会运行")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pirntf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印 foo + 1 的值，此处调用了 foo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用函数，传入参数 2")]),t._v("\n")])])]),a("p",[t._v("操作符")]),t._v(" "),a("ol",[a("li",[t._v("算术操作符")])]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("ul",[a("li",[a("ul",[a("li",[t._v("/")])])])])])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v(". 操作符")])]),t._v(" "),a("ul",[a("li",[t._v("对于一般的高级语言，点操作符就是调用目标的方法，比如")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先创建 Foo 类的一个实例")]),t._v("\nfoo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fooFunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 Foo 中的 fooFunc 方法")]),t._v("\n")])])]),a("ul",[a("li",[t._v("对于 c 语言，点操作符表示对结构体成员访问的一种简便写法，这里不需要深入")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("布尔值与逻辑操作符")])]),t._v(" "),a("ul",[a("li",[t._v("我们一般默认")])]),t._v(" "),a("p",[t._v("数组")]),t._v(" "),a("p",[t._v("字符串")]),t._v(" "),a("p",[t._v("类")])])}),[],!1,null,null,null);s.default=r.exports}}]);