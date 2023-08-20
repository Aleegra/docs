"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4324],{11284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const s={sidebar_position:1},r="Standalone Installation",i={unversionedId:"deploy/standalone",id:"deploy/standalone",title:"Standalone Installation",description:"Standalone installation is suitable for PoC or test scenarios.",source:"@site/docs/deploy/standalone.md",sourceDirName:"deploy",slug:"/deploy/standalone",permalink:"/docs/deploy/standalone",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/deploy/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"High Availability Installation",permalink:"/docs/deploy/replication"}},o={},u=[{value:"Setting up TLS",id:"setting-up-tls",level:2},{value:"Default Mode, using Self-Signed Certificate",id:"default-mode-using-self-signed-certificate",level:3},{value:"Using ACME to Generate a Trusted Certificate",id:"using-acme-to-generate-a-trusted-certificate",level:3},{value:"Using a Custom Certificate",id:"using-a-custom-certificate",level:3},{value:"Using TLS Termination",id:"using-tls-termination",level:3},{value:"Configuring the Database",id:"configuring-the-database",level:2},{value:"Configuring HTTP Proxy",id:"configuring-http-proxy",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"standalone-installation"},"Standalone Installation"),(0,l.kt)("p",null,"Standalone installation is suitable for PoC or test scenarios."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Prerequisites: "),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"A Linux server with no less than 4 CPU cores and 8GiB memory."),(0,l.kt)("li",{parentName:"ul"},"At least 50GB of free disk space."),(0,l.kt)("li",{parentName:"ul"},"Docker installed, if not please refer to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker's official documentation")," for how to setup Docker on your machine."),(0,l.kt)("li",{parentName:"ul"},"The server has ports 80 and 443 open."))),(0,l.kt)("p",null,"Run the following Docker command for standalone installation. For additional configuration, see following sessions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  sealio/walrus:<VERSION>\n")),(0,l.kt)("h2",{id:"setting-up-tls"},"Setting up TLS"),(0,l.kt)("h3",{id:"default-mode-using-self-signed-certificate"},"Default Mode, using Self-Signed Certificate"),(0,l.kt)("p",null,"By default Walrus uses a self-signed HTTPS certificate, which results in a warning message in the browser."),(0,l.kt)("h3",{id:"using-acme-to-generate-a-trusted-certificate"},"Using ",(0,l.kt)("a",{parentName:"h3",href:"https://letsencrypt.org/docs/challenge-types"},"ACME")," to Generate a Trusted Certificate"),(0,l.kt)("p",null,"Let's Encrypt issues a 90-day HTTPS certificate. The renewal of this certificate will be automatically completed by Walrus."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Prerequisites: "),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Configure a domain name so that it can be mapped to the Linux server where Walrus is deployed, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"walrus.mydomain.com"),"."),(0,l.kt)("li",{parentName:"ul"},"Open ports 80 and 443 on the Linux server where Walrus is deployed, and ensure the server can be accessed by Let's Encrypt service."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n -p 80:80 -p 443:443 \\\n -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \\\n sealio/walrus:<VERSION>\n")),(0,l.kt)("p",null,"The above adopts the ",(0,l.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/challenge-types/#http-01-challenge"},"HTTP-01")," challenge mode. If ",(0,l.kt)("strong",{parentName:"p"},"port 80 cannot be opened"),", it will automatically switch to using ",(0,l.kt)("a",{parentName:"p",href:"https://letsencrypt.org/docs/challenge-types/#tls-alpn-01"},"TLS-ALPN-01")," challenge mode."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n -p 443:443 \\\n -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \\\n sealio/walrus:<VERSION>\n")),(0,l.kt)("h3",{id:"using-a-custom-certificate"},"Using a Custom Certificate"),(0,l.kt)("p",null,"A custom certificate refers to a HTTPS certificate issued by a certificate authority."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Prerequisites: "),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Prepare certificate files on the Linux server where Walrus is deployed, for example, place the private key PEM file for the HTTPs service under the <PRIVATE_KEY_FILE> path, and place the HTTPs service certificate (chain) PEM file under the <CERT_FILE> path."),(0,l.kt)("li",{parentName:"ul"},"If there is a (non-public trust) CA certificate, please also place it in the file under the <CERT_FILE> path, usually chained after the HTTPs service certificate (chain)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -v /<PRIVATE_KEY_FILE>:/etc/walrus/ssl/key.pem \\\n  -v /<CERT_FILE>:/etc/walrus/ssl/cert.pem \\\n  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/walrus/ssl/key.pem \\\n  -e SERVER_TLS_CERT_FILE=/etc/walrus/ssl/cert.pem \\\n  sealio/walrus:<VERSION>\n")),(0,l.kt)("h3",{id:"using-tls-termination"},"Using TLS Termination"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TLS_termination_proxy"},"TLS Termination")," is generally executed by a reverse proxy service."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: "),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"The link from the reverse proxy service to Walrus can use HTTP requests and set Walrus's session Cookie ",(0,l.kt)("inlineCode",{parentName:"li"},"walrus_session")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"Secure: true")," to avoid man-in-the-middle attacks."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --privileged --restart=always \\\n  -p 80:80 \\\n  -e SERVER_ENABLE_TLS=false \\\n  sealio/walrus:<VERSION>\n")),(0,l.kt)("h2",{id:"configuring-the-database"},"Configuring the Database"),(0,l.kt)("p",null,"Walrus uses the ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," relational database."),(0,l.kt)("p",null,"By default, Walrus will start a PostgresSQL instance inside the running container, which is very convenient and easy to use, but does not protect against data loss. Therefore, users can provide an external PostgreSQL DB when starting Walrus for reliability."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# step 1: Start PostgreSQL with the following command.\ndocker run -d --restart=always \\\n  -p 5432:5432 \\\n  -e "POSTGRES_PASSWORD=Root123" \\\n  -e "POSTGRES_USER=root" \\\n  -e "POSTGRES_DB=walrus" \\\n  postgres:14.6\n\n# step 2: Start Walrus with the following command.\nsudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@<postgres-ip-address>:5432/walrus?sslmode=disable"\\\n  sealio/walrus:<VERSION>\n')),(0,l.kt)("h2",{id:"configuring-http-proxy"},"Configuring HTTP Proxy"),(0,l.kt)("p",null,"If deployed in a network isolation environment and can access the Internet through a proxy, you can set the proxy by configuring environment variables. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d --privileged --restart=always \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.0.100:3128" \\\n  -e HTTPS_PROXY="http://192.168.0.100:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,.svc,.cluster.local,example.com" \\\n  sealio/walrus:<VERSION>\n')))}p.isMDXComponent=!0}}]);