

- rem(font size of the root element) 指相对于根元素字体大小的相对单位
- em(font size of the element) 指相对于父元素字体大小的相对单位

- 大多数浏览器的默认字号为16px，所以1rem=16px，但是不方便换算；
- 假设1rem=10px，这样就比较容易换算，所以有了
`html{
    font-size: 10/16*100% = 62.5%
}`
### 问题
- rem属于CSS3的属性，一些浏览器的早期版本默认字号并不是16px
- chrome强制字体最小值为12px，小于12px均按12px处理
