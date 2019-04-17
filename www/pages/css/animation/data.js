const data = {
  title: 'Animation',
  contents: [
    {
      title: 'animation-timing-function',
      definition: 'Định dạng cách thay đổi trạng thái của đối tượng.',
      options: [
        {
          value: 'linear',
          children: 'linear: giữ tốc độ như nhau từ lúc bắt đầu cho đến khi kết thúc.',
        },
        {
          value: 'ease',
          children: 'ease: bắt đầu chậm sau đó nhanh và kết thúc chậm dần.',
        },
        {
          value: 'ease-in',
          children: 'ease-in: bắt đầu chậm.',
        },
        {
          value: 'ease-out',
          children: 'ease-out: kết thúc chậm.',
        },
        {
          value: 'ease-in-out',
          children: 'ease-in-out: bắt đầu chậm và kết thúc chậm.',
        },
      ],
    },
  ],
}

export default data
