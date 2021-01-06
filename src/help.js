const help = (prefix) => {
	return `>*OLÁ AQUI ESTÃO ALGUNS COMANDOS DO BOTGUIX!*<
	
	
command : *${prefix}sticker* or *${prefix}stiker*
desc : Converte imagem/gif/vídeo/ em figurinha
usage : reply image/gif/video, or send image/gif/video with caption\n

command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : responder imagem ou enviar imagem com legenda \ n


command : *${prefix}toimg*
desc : converte Figurinha em imagem
usage : adesivo de resposta \ n

command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *$ {prefix} texto tsticker aqui * \ n

> *Meme Commands* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
usage : basta enviar o comando \ n

command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage :  basta enviar o comando \ n

> *Others Commands* <
command : *${prefix}gtts*
desc :  converter texto em fala / áudio
usage : * $ {prefix} gtts [cc] [texto] * \ nexemplo: * $ {prefix} gtts ja On2-chan * \ n

command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : basta enviar o comando \ n

command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : basta enviar o comando \ n

command : *${prefix}url2img*
desc : tirar screenshots da web
usage : * $ {prefix} url2img [tipe] [url] * \ n

command : *${prefix}simi*
desc : sua mensagem será respondida por simi
usage :  * $ {prefix} simi sua mensagem * \ n

command : *${prefix}ocr*
desc : pegue o texto na foto
usage :  responder imagem ou enviar imagem com legenda \ n

command : *${prefix}wait*
desc :  pesquisar anime com imagem [What Anime Is This / That]
usage : responder imagem ou enviar imagem com legenda \ n

command : *${prefix}setprefix*
desc :  substitua o prefixo
usage : * $ {prefix} setprefix [texto | opcional] * \ nexemplo: * $ {prefix} setprefix? *
note : Este comando só pode ser usado pelo proprietário do bot \ n

> *COMANDOS GRUPO* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : * $ {prefix} add 62813xxxxx * \ n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n

command : *${prefix}kick*
desc : chutar membros do grupo
usage : * $ {prefix} kick @ tagmember * \ n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n

command : *${prefix}promote*
desc :  tornar o membro do grupo como administrador do grupo
usage : * $ {prefix} promova @ tagmember * \ n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n

command : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage :  * $ {prefix} rebaixar @ tagmember * \ n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n

command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n


command : *${prefix}leave*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note :  Só pode ser usado por administradores de grupo e proprietário do bot \ n

command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo \ n

command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : * $ {prefix} simih 1 * para ativar o modo simi e * $ {prefix} simih 0 * para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo \ n`
}
Meu criador:wa.me/5585996283018

exports.help = help
