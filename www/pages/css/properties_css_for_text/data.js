const data = {
  title: 'Properties css for text',
  contents: [
    {
      title: 'color',
      definition: 'Thuộc tính quy định màu sắc cho văn bản',
      options: ['red', '#e67e22', 'rgb(255,0,123)'],
    },
    {
      title: 'font-size',
      definition: 'Thuộc tính quy định cỡ chữ cho văn bản',
      options: ['14px', '2rem', '2em', 'large', '150%'],
    },
    {
      title: 'text-align',
      definition: 'Thuộc tính quy định căn chỉnh văn bản theo chiều ngang',
      options: ['left', 'center', 'right', 'justify'],
      output: `
      texttttttt1
        texttttttttttttt2
        texttttt3
        `,
    },
    {
      title: 'text-decoration',
      definition: 'Thuộc tính quy định trang trí được thêm vào cho văn bản',
      options: ['overline', 'line-through', 'underline', 'underline overline'],
      note: `
      Thuộc tính viết tắt cho:
      ✔ text-decoration-line (Sets the kind of text decoration to use (like underline, overline, line-through))
      ✔ text-decoration-color (Sets the color of the text decoration)
      ✔ text-decoration-style (Sets the style of the text decoration (like solid, wavy, dotted, dashed, double))
      `,
    },
    {
      title: 'text-transform',
      definition: 'Thuộc tính điều khiển chữ hoa và chữ thường trong văn bản',
      options: ['none', 'uppercase', 'lowercase', 'capitalize'],
      output: 'text1 text2',
    },
    {
      title: 'text-indent',
      definition: 'Thuộc tính quy định thụt dòng đầu tiên trong văn bản',
      options: ['50px', '-2em', '30%'],
    },
    {
      title: 'letter-spacing',
      definition: 'Thuộc tính quy định khoảng cách giữa các kí tự trong văn bản',
      options: ['normal', '3px', '-3px', '20%'],
    },
    {
      title: 'line-height',
      definition: 'Thuộc tính quy định chiều cao của một dòng',
      options: ['normal', '1.6', '10px', '80%', '200%'],
      output: `
      texttttttt1
        texttttttttttttt2
        texttttt3
        `,
    },
    {
      title: 'direction',
      definition: 'Thuộc tính quy định hướng văn bản viết của một phần từ',
      options: ['ltr', 'rtl'],
    },
    {
      title: 'word-spacing',
      definition: 'Thuộc tính quy định khoảng cách giữa các từ trong văn bản',
      options: ['normal', '10px', '-5px'],
    },
    {
      title: 'text-shadow',
      definition: 'Thuộc tính thêm bóng vào văn bản',
      options: ['2px 2px #f00', '2px 2px 8px #FF0000', '0 0 3px #FF0000, 0 0 5px #0000FF'],
    },
    {
      title: 'white-space',
      definition: 'Thuộc tính quy định cách khoảng trắng bên trong phần tử xử lý như thế nào',
      options: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
      output:
        'This example demonstrates the white-space property. You can see the result of the different white-space properties by clicking on one of the properties on the left.',
    },
    {
      title: 'word-break',
      definition: 'Thuộc tính quy định cách các từ sẽ bị ngắt khi đến cuối dòng',
      options: ['normal', 'break-all', 'keep-all', 'break-word'],
      output: `
      Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.
      `,
      outputStyle: { width: '140px', border: '1px solid #000' },
      note: `
      Thuộc tính viết tắt cho:
      ✔ word-break: break-all: ngắt dòng theo <code>kí tự</code> khi văn bản bản vượt quá độ dài thẻ bao bọc nó.
      ✔ word-break: keep-all: ngắt dòng theo <code>từ</code> khi văn bản bản vượt quá độ dài thẻ bao bọc nó.
      ✔ word-break: break-word: ngắt dòng theo <code>từ</code> khi văn bản vượt quá độ dài thẻ bao bọc nó (nếu từ có độ dài vượt quá độ dài thẻ bao bọc nó thì sẽ tự động ngắt dòng).
      Note: <mark>word-break</mark> không nên sử dụng cho các ngôn ngữ Trung Quốc, Nhật Bản, Hàn Quốc.
      `,
    },
    {
      title: 'word-wrap',
      definition:
        'Thuộc tính quy định xuống dòng văn bản khi chuỗi kí tự có quá nhiều kí tự liền nhau (giống <mark>word-break: break-word</mark>)',
      options: ['normal', 'break-word	'],
      output: `
      Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.Thisissomeveryveryverylong word.
      `,
      outputStyle: { width: '140px', border: '1px solid #000' },
    },
    {
      title: 'user-select',
      definition: 'Thuộc tính quy định liệu văn bản của một phần tử có thể được chọn hay không',
      options: ['auto', 'none', 'text', 'all'],
    },
  ],
}

export default data
