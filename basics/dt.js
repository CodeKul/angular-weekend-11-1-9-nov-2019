let num = 10
num = 'alkfd'
num = 40.90
num = true
num = () => console.log(`fn`)

let config = {
    url: 'http://codekul.com',
    port: 8080,
    connect: () => {
        console.log(`Connecting to codekul server`)
    }
}

console.log(` 
    URL - ${config.url},
    Port - ${config.port} 
`)

config.connect()

let mobiles = [
    'Android',
    'Windows',
    'Apple'
]

let dataum = [
    { adldfkjadlkf: 'excel', qtadflkadjdfy: 15 },
    { adldfkjadlkf: 'db', qtadflkadjdfy: 8 }
]
