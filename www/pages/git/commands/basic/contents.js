const contents = [
  {
    header: 'config',
    definition: 'Cấu hình cho git',
    examples: [
      {
        text: 'user.name',
        input: 'git config --global user.name "Nguyen Tran Dai"',
      },
      {
        text: 'user.email',
        input: 'git config --global user.email daint2@fsoft.com.vn',
      },
      {
        text: 'core.autocrlf',
        input: 'git config --global core.autocrlf false',
      },
    ],
  },
  {
    header: 'init',
    definition: `Tạo một <mark>local repository</mark> tại <mark>working directory</mark>`,
    examples: [
      {
        text: '',
        input: 'git init',
      },
    ],
  },
  {
    header: 'clone',
    definition: 'Sao chép một remote repository',
    examples: [
      {
        text:
          'Sao chép một remote repository đến thư mục mới có tên giống repository (thư mục được tự động tạo mới)',
        input: 'git clone https://github.com/{user}/{repository}.git',
      },
      {
        text: 'Sao chép một remote repository đến thư mục hiện tại',
        input: 'git clone https://github.com/{user}/{repository}.git .',
      },
    ],
  },
  {
    header: 'branch',
    definition: 'Thao tác với branch',
    examples: [
      {
        text: 'Liệt kê tất cả các branch trong repo và cho biết đang ở branch nào',
        input: 'git branch',
      },
      {
        text: 'Tạo mới branch',
        input: 'git branch <branch name>',
      },
      {
        text: 'Xóa một local branch',
        input: `
        // branch đang ở trạng thái fully merged
        git branch -d <branch name>
        or
        // branch ở trạng thái not fully merged
        git branch -D <branch name>
        or
        git branch --delete <branch name>
        `,
      },
    ],
    note: `
      Branch mặc định là <code>master</code>.
      Khi bạn tạo một branch và thực hiện một số commit trên đó và chưa thực hiện thao tác merge vào branch master thì nó sẽ ở trạng thái <code>not fully merged</code>, còn bạn đã merge rồi thì sẽ ở trạng thái <code>fully merged</code>.
    `,
  },
  {
    header: 'checkout',
    definition: 'Chuyển đổi branch',
    examples: [
      {
        text: 'Chuyển từ branch này sang branch khác',
        input: 'git checkout <branch name>',
      },
      {
        text: 'Tạo mới một branch và chuyển sang nó',
        input: 'git checkout -b <branch name>',
      },
    ],
  },
  {
    header: 'merge',
    definition: 'Hợp nhất branch',
    examples: [
      {
        text: 'Hợp nhất một branch khác vào branch hiện tại',
        input: 'git merge <branch name>',
      },
    ],
    note: `
    Các bước hợp nhất một branch đến branch đích:
    Step 1: <code>git checkout <target branch name></code>
    Step 2: <code>git merge <other branch name></code>
    `,
  },
  {
    header: 'fetch',
    definition: `
    Tiến hành kéo các thay đổi từ trên <mark>remote server</mark> về <mark>remote local</mark>
    Không tự động <mark>merge</mark>
    `,
    examples: [
      {
        text: '',
        input: `
          git fetch <remote repository name> <remote branch name>

          <mark>remote repository</mark> thường là <code>origin</code>
        `,
      },
    ],
  },
  {
    header: 'pull',
    definition: `
    Tiến hành kéo các thay đổi từ trên <mark>remote server</mark> về <mark>remote local</mark>
    Tự động <mark>merge</mark> các thay đổi đó ngay
    `,
    examples: [
      {
        text: '',
        input: `
          git pull <remote repository name> <remote branch name>

          <mark>remote repository</mark> thường là <code>origin</code>
        `,
      },
    ],
    note: `
    <code>git pull</code> = <code>git fetch</code> + <code>git merge</code>
    `,
  },
  {
    header: 'status',
    definition: 'Liệt kê trạng thái của các file tại <mark>working directory</mark>',
    examples: [
      {
        text: '',
        input: 'git status',
      },
    ],
  },
  {
    header: 'add',
    definition: 'Thêm một hay nhiều file đến <mark>staging</mark>',
    examples: [
      {
        text: 'Thêm một file',
        input: 'git add <filename>',
      },
      {
        text: 'Thêm tất cả file',
        input: `
        git add --all
        or
        git add .
        `,
      },
    ],
  },
  {
    header: 'commit',
    definition: 'Tạo một commit',
    examples: [
      {
        text: 'Thêm mới một commit',
        input: 'git commit -m "Commit message"',
      },
      {
        text: 'Đổi tên `commit message` của commit cuối',
        input: 'git commit --amend -m "New commit message"',
      },
    ],
  },
  {
    header: 'log',
    definition: 'Xem lịch sử commit',
    examples: [
      {
        text: 'Xem lịch sử tất cả commit',
        input: 'git log',
      },
      {
        text: 'Xem lịch sử tất cả commit (với mỗi commit trên 1 dòng)',
        input: 'git log --oneline',
      },
      {
        text: 'Xem lịch sử 2 lần commit gần nhất',
        input: 'git log -2',
      },
    ],
  },
  {
    header: 'show',
    definition: 'Xem nội dung của một commit được chỉ định',
    examples: [
      {
        text: '',
        input: 'git show <commit hash code>',
      },
    ],
  },
  {
    header: 'push',
    definition: `Đẩy các <mark>commit</mark> (Gửi các thay đổi) đến <mark>branch được chỉ định</mark>`,
    examples: [
      {
        text: '',
        input: `
          git push <remote repository name> <remote branch name>

          <mark>remote repository</mark> thường là <code>origin</code>
        `,
      },
    ],
  },
  {
    header: 'reset',
    definition: 'Trở về trạng thái được chỉ định',
    examples: [
      {
        text: 'Trở về trạng thái ban đầu trước khi chỉnh sửa của một file tại local',
        input: 'git reset <filename>',
      },
      {
        text: 'Loại bỏ tập tin đã đưa vào <mark>staging</mark>',
        input: 'git reset HEAD <filename>',
      },
      {
        text: `Đưa <mark>current branch</mark> trở về trạng thái của <mark>commit hash code</mark> chỉ định và các file ở trạng thái <mark>đã add</mark>`,
        input: 'git reset --soft <commit hash code>',
      },
      {
        text: `Đưa <mark>current branch</mark> trở về trạng thái của <mark>commit hash code</mark> chỉ định và các file ở trạng thái <mark>chưa add</mark>`,
        input: 'git reset --mixed <commit hash code>',
      },
      {
        text: `Xóa toàn bộ các commit trước đó, Đưa <mark>current branch</mark> trở về trạng thái của <mark>commit hash code</mark> chỉ định và các file ở trạng thái <mark>chưa add</mark>`,
        input: 'git reset --hard <commit hash code>',
      },
      {
        text: `Trở về trạng thái của các file trước khi commit <mark>(chưa add)</mark>`,
        input: 'git reset HEAD~1',
      },
      {
        text: `Trở về trạng thái của các file trước khi commit <mark>(đã add)</mark>`,
        input: 'git reset --soft HEAD^',
      },
    ],
  },
  {
    header: 'clean',
    definition: '',
    examples: [
      {
        text:
          'Remove untracked directories from the working tree (e.g., new or automatically generated directories)',
        input: 'git clean -fd',
      },
      {
        text: 'Remove untracked files from the working tree (e.g., new files, generated files)',
        input: 'git clean -fx',
      },
    ],
  },
  {
    header: 'stash',
    definition:
      'Được sử dụng khi muốn lưu lại các thay đổi nhưng chưa commit, thường rất hữu dụng khi bạn muốn đổi sang 1 branch khác mà lại đang làm dang dở ở branch hiện tại.',
    examples: [
      {
        text: '',
        input: `
        // Xem danh sách stash
        git stash list [<options>]
        // Apply stash gần nhất và xóa stash đó
        git stash pop
        // Apply stash
        git stash apply stash@{<index>}
        // Xem nội dung stash
        git stash show stash@{<index>}
        // Xóa stash
        git stash drop stash@{<index>}
        // Xóa toàn bộ stash
        git stash clear
        // Lưu toàn bộ nội dung công việc đang làm dở, sử dụng lệnh
        git stash save
        or
        git stash
        `,
      },
    ],
  },
  {
    header: 'remote',
    definition: 'Thao tác với remote',
    examples: [
      {
        text: 'Liệt kê các remote url',
        input: 'git remote -v',
      },
      {
        text: 'Thêm remote repository',
        input: `
        git remote add <remote repository name> https://github.com/{user}/{repository}.git

        <mark>remote repository</mark> thường là <code>origin</code>
        `,
      },
    ],
  },
]

export default contents
