export const TranslateMessageError = (msg: string) => {
    const message = [
        {
            enUs: 'You need to enter your password',
            ptBr: 'Você precisa digitar uma senha'
        },
        {
            enUs: 'You need to enter your email',
            ptBr: 'Você precisa digitar um email'  
        },
        {
            enUs: 'Login released with success!',
            ptBr: 'Login realizado com sucesso!'
        }
    ]

    return message[msg]
}