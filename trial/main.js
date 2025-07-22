const app = document.createElement("main")

const random = ()=>{return parseInt(Math.random()*100)}
app.innerHTML = `
<div class = "grid">
${Array.from({length : 40},(_ , i)=>`<div class="card card--${i}">${i.toString().repeat(random())}</div>`).join("")}
</div>
    
`
document.body.appendChild(app)

