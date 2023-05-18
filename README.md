# Migrate from React.js to Next.js 🚗 🚛 🚚💨

This is Sangmin Oh's portfolio website that I made it in React.js before.  
After researching Next.js's pros, I think this can solve previous React project's weak point.  
So, I decide to learn and migrate to Next.js.


## Plan 🗓

| Before        | STEP 1        |   STEP 2        |
| ------------- | ------------- |  -------------  |
|Portfolio website for Artist with React.js |Migrate from React to Next.js **looks like** fetch data from headless CMS. |Make admin feature that Artist can CRUD without developer.|
|React.js + Github deploy | Next.js + vercel deploy | Next.js + Spring boot + AWS     |
|       -      |    Until May   |    undefined |


## Why 💡
* Improve **SEO**
* Automatic **Image Optimization**
* Portfolio website is definitely static website. We don’t need CSR.
* Bad FCP from CSR, **Improve performance** with SSG
* More convenient than React.js in data fetching and assembling (even can decoupling between View logic and data fetching)
* Prepare **STEP 2**


## Performance Improvment (lighthouse) 📈

|  -  | React.js | Next.js (avg) |
| :-: |:--------:|:-------:|
| FCP |  0.6s  |  0.28s  |
| LCP |  1.6s  |  0.66s   |
| CLS |   0  |  0  |
| Accessibility |   87  |  100  |
| SEO |  100   |  100  |




## Trouble Shooting 🚀

#### 1. Build error reason: connect ECONNREFUSED 127.0.0.1:3000
I tried to build my project. Then I met this one. This error occurred on every page that uses API Routes. After Googling it, I learned that the error occurs because there is no server to respond to my request before initial deployment. Before initial deployment, instead of using `fetch`, I should `import` data directly from the public directory during the build process. After the initial deployment, I can use API Routes because there is a server to respond.

> ref: https://github.com/vercel/next.js/discussions/46245


#### 2. If a user enters a URL directly without going through the index page, my project cannot render layout.js.

First, I used `layout.js` in `_app.js` because it is common to all pages in the project. I fetched layout data with `getStaticProps` in index page and stored it in global state with the `swr` library. In layout.js, I get layout data with the `swr` key prop from global state.

This error totally makes sense. Layout data was fetched in index, but the user does not access to index page. It is tricky point. I got layout data in index page, not `_app.js`, because `getStaticProps` is not available in `_app.js`.


## Contact 📬

```
Sangmin Oh: Osangminstudio@gmail.com  
Naked Friends: nfs82young@gmail.com
```
<center>Thank you for reading this.☺️</center>  
