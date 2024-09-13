let herois = [
    { id: 1, nome: 'Spider-man', pontosDePoder: 190 }
]

let viloes = [
    { id: 1, nome: 'Thanos', pontosDePoder: 1000 }
]

exports.mostrarHeroi = (req, res) => {
    res.status(200).send({ herois, viloes })
}

exports.listarHeroi = (req, res) => {
    const novoHeroi = req.body
    herois.push(novoHeroi)
    res.status(201).send({ mensagem: 'Herói adicionado' })
}

exports.listarVilao = (req, res) => {
    const novoVilao = req.body
    viloes.push(novoVilao)
    res.status(201).send({ mensagem: 'Vilão adicionado' })
}

exports.batalhar = (req, res) => {
    const { heroiId, vilaoId } = req.body

    const heroi = herois[heroiId - 1]
    const vilao = viloes[vilaoId - 1]

    if (heroi.pontosDePoder > vilao.pontosDePoder) {
        res.status(201).send({ mensagem: `${heroi.nome} venceu ${vilao.nome}` })
    } else if (vilao.pontosDePoder > heroi.pontosDePoder) {
        res.status(201).send({ mensagem: `${vilao.nome} venceu ${heroi.nome}` })
    } else {
        res.status(201).send({ mensagem: `Empate!` })
    }
}