const contents = [
  {
    header: 'Di chuyển đến một thư mục',
    examples: [
      {
        text: 'Di chuyển đến một thư mục bất kì',
        input: 'cd <absolute path>',
      },
      {
        text: 'Lùi 1 cấp so với thư mục hiện tại',
        input: 'cd ..',
      },
      {
        text: `Đến thư mục của <mark>User</mark>`,
        input: 'cd ~',
      },
    ],
  },
  {
    header: 'Liệt kê danh sách các file và thư mục',
    examples: [
      {
        text: 'Liệt kê danh sách các file và thư mục ở một thư mục bất kì',
        input: 'ls <absolute path>',
      },
      {
        text:
          'Liệt kê danh sách các file và thư mục ở thư mục hiện tại (Không bao gồm các file và thư mục ẩn)',
        input: 'ls',
      },
      {
        text:
          'Liệt kê danh sách các file và thư mục ở thư mục hiện tại (Bao gồm các file và thư mục ẩn)',
        input: 'ls -a',
      },
    ],
  },
  {
    header: 'Tạo mới thư mục',
    examples: [
      {
        text: 'Tạo mới thư mục tại một thư mục bất kì',
        input: 'mkdir <absolute path>/<folder name>',
      },
      {
        text: 'Tạo mới thư mục tại thư mục hiện tại',
        input: 'mkdir <folder name>',
      },
    ],
  },
  {
    header: 'Xóa thư mục',
    examples: [
      {
        text: 'Xóa thư mục tại một thư mục bất kì',
        input: 'rmdir <absolute path>/<folder name>',
      },
      {
        text: 'Xóa thư mục tại thư mục hiện tại',
        input: 'rmdir <folder name>',
      },
    ],
  },
  {
    header: 'Xem đường dẫn thư mục hiện tại',
    examples: [
      {
        input: 'pwd',
      },
    ],
  },
]

export default contents
