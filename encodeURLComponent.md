<!--
 * @Author: whisperSec
 * @objectDescription: 文件描述
 * @Date: 2020-10-31 14:56:55
 * @LastEditors: 最后编辑者
 * @LastEditTime: 2020-10-31 15:27:09
-->

- encodeURLComponent()是JS的全局函数，可把字符串作为URL进行编码。
- 该方法不会对ASCII字母和数字进行编码，也不会对这些ASCII标点符号进行编码：-_.!~*'()。
- 其他的字符(比如:;/?：@+&=这些用于分隔URL的标点符号)，都由一个或多个十六进制的转移序列进行替换。

- decodeURLComponent()是JS的全局函数，用于encodeURLComponent函数的解码。

