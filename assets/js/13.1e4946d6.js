(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(t,a,s){"use strict";s.r(a);var e=s(7),l=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("函数内部的变量只存活在函数作用域，有时候想要实现内部变量和外部环境的关联。这就是闭包。")]),t._v(" "),s("p",[t._v("闭包可以用来在一个函数与一组“私有”变量之间创建关联关系。")]),t._v(" "),s("p",[t._v("函数是编译期概念，是静态的，而闭包是运行期概念，是动态的。")]),t._v(" "),s("p",[t._v("闭包的实现前提是该编程语言中，函数是第一公民，可以作为参数传递。")]),t._v(" "),s("h3",{attrs:{id:"lambda-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lambda-实现"}},[t._v("#")]),t._v(" lambda 实现")]),t._v(" "),s("div",{staticClass:"language-lambda extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("; Return a list of all books with at least THRESHOLD copies sold.\n(define (best-selling-books threshold)\n  (filter\n    (lambda (book)\t// 这里定义了一个函数，里面使用了外部环境中的 threshold 作为比较参数，后续 filter 都可以访问到 threshold\n      (>= (book-sales book) threshold))\n    book-list))\n\nlua 实现\nfunction best-selling-books(threshold) \n\tfilter(function(book)\n\t\treturn book-sales(book) >= threshold\n\tend, book-list)\nend\n")])])]),s("h3",{attrs:{id:"c中的回调函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c中的回调函数"}},[t._v("#")]),t._v(" c中的回调函数")]),t._v(" "),s("p",[t._v("c 中为了保存函数中的用户变量，会传递一个指针")]),t._v(" "),s("h3",{attrs:{id:"作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),s("ol",[s("li",[t._v("惰性求值\n因为闭包是在使用时才定义的，如果闭包中使用复杂的运算，可以实现需要时才执行的效果")]),t._v(" "),s("li",[t._v("多个函数可以使用一个相同的环境")]),t._v(" "),s("li",[t._v("实现对象系统\n有写变量传递给函数时，不希望暴露在外部环境中，这时候使用闭包包装一下然后再传递。")])]),t._v(" "),s("h3",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("p",[t._v("lua 中的 upvalues\nlua 解析函数时，会创建一个函数原型的引用，环境，以及一个 upvalues 数组，闭包对象会在离开他的外部作用域时，拷贝外部作用域的 upvalues 值到自己的作用域内\n从而，离开了外部作用域后，仍然可以访问到其中 upvalues 的拷贝（即闭包中的upvalues）")])])}),[],!1,null,null,null);a.default=l.exports}}]);