// 3be48169
// http://www.omdbapi.com/?i=tt3896198&apikey=3be48169


async function main() {
    const batman = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=3be48169&s=batman");
    const batmanData = await batman.json();
    
}

main();