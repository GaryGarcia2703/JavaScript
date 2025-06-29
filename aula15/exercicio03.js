let points = [500, 200, 800, 300, 700]
points.push(950)
points.sort((a, b) => b - a)

console.log(`A pontuação do jogador de indice 4 é de  ${points[4]} pontos!`)
console.log(points)
