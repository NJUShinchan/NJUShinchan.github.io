const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    fixed: true,
    mini: false, //迷你模式
    autoplay: false, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: '半岛铁盒', //音频名称
            artist: '周杰伦', //音频艺术家
            url: 'https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒.mp3', //音频外链
            cover: 'https://echeverra.cn/wp-content/uploads/2022/05/周杰伦-半岛铁盒-mp3-image.png', //音频封面
            theme: '#ebd0c2' //切换到此音频时的主题色，比上面的 theme 优先级高
        },
        {
            name: '给我一首歌的时间', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '周杰伦',
            url: 'https://echeverra.cn/wp-content/uploads/2021/06/周杰伦-给我一首歌的时间.mp3',
            cover: 'https://echeverra.cn/wp-content/uploads/2021/06/周杰伦-给我一首歌的时间-mp3-image.png',
            theme: '#46718b'
        },
        {
            name: '退后', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: '周杰伦',
            url: 'https://github.com/NJUShinchan/music/raw/main/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E9%80%80%E5%90%8E_H.mp3',
            cover: 'https://github.com/NJUShinchan/music/raw/main/T002R500x500M000002jLGWe16Tf1H_1.jpg',
            theme: '#46718b'
        }
    ]
});