# React.js を利用したポートフォリオサイト

---

**概要**

- 学歴や経歴やスキルや作ったプロジェクトなど自分を紹介するポートフォリオサイト

**作業期間**

- 一ヶ月

**開発言語・技術：**

- Html, Css, JavaScript(React.js)

**参考 URL**

- https://nervous-snyder-dda352.netlify.app/

**きっかけ**

- 今まで作ってきたプロジェクトを紹介することによって言葉では限界があると判断し、作ることになりました。

**アピールポイント**

1. Router を利用し、それぞれのページが Url で分類されるようにしました

```js
<Router>
  <Header />
  <Category />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
    <Route path="/Skills" exact component={Skills} />
    <Route path="/MyWork" exact component={MyWork} />
    <Route path="/Contact" exact component={Contact} />
    <Redirect from="*" to="/" />
  </Switch>
</Router>
```

2. 今まで作ってきた Web プロジェクトを載せました。
