data = [
	{"comments":[],"content":"使用nginx来配置转发多个nodejs服务的域名\n\n环境： `ubuntu`\n\n需求： 比如说我两个域名：\n\n`http://delonakc.ga`: 对应nodejs的 8080端口（`http://127.0.0.1:8080`）\n\n`http://delonakc1.ga`: 对应nodejs的8081端口（`http://127.0.0.1:8081`）\n\n现在需要把这两个域名配置分别转发到8080和8081端口去。\n\n操作配置文件：\n\n\u0009\u0009//进入nginx配置目录\n\u0009\u0009cd /etc/nginx/sites-enabled/\n\u0009\u0009//创建跟域名相对应两个文件\n\u0009\u0009vim delonakc\n\u0009\u0009//把下面的代码放到delonakc文件中\n\u0009\u0009server {\n\u0009\u0009\u0009\u0009listen 80;\n\u0009\u0009\u0009\u0009server_name: www.delonakc.ga delonakc.ga;\n\u0009\u0009\u0009\u0009location / {\n\u0009\u0009\u0009\u0009\u0009\u0009proxy_pass http://127.0.0.1:8080;\n\u0009\u0009\u0009\u0009}\n\u0009\u0009}\n\u0009\u0009//delonakc1 文件中的文件只要把相应的改成8081端口就好了\n\u0009\u0009\n\u0009\u0009//然后重启nginx服务器\n\u0009\u0009/etc/init.d/nginx restart \n\u0009\u0009\n\u0009\u0009//如果重启失败，可以查看失败日志\n\u0009\u0009cat /var/log/nginx/error.log\n\u0009\u0009\n\n","lastModifid":1.490630706947e+12,"saveTime":1490630598222,"title":"nginx配置转发多个nodejs服务域名","type":"nodejs, 服务器","visit":0},
	{"title": "test1", content: "hello world", saveTime: 1490630598222, updateTime: 1490630598222, type: "hello", comments: [] },
]

db = connect('127.0.0.1:27017/delonakc')
db.createCollection('articles')

for (i = 0; i < data.length; i++) {
	db.articles.insert(data[i])
}