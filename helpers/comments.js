
module.exports = {
    newest() {
        var comments = [
            {
                image_id:   1,
                email:      'teste@teste.com.br',
                name:       'Usuário Teste',
                gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                comment:    'Teste de comentário123...',
                timestamp:  Date.now(),
                image: {
                    uniqueId:       1,
                    title:          'Teste de Imagem 1',
                    description:    '',
                    filename:       'sample1.jpg',
                    views:          0,
                    likes:          0,
                    timestamp:      Date.now
                }
            }, {
                image_id:   1,
                email:      'teste@teste.com.br',
                name:       'Usuário Teste',
                gravatar:   'http://www.gravatar.com/avatar/9a99fac7b524fa443560ec7b5ece5ca1?d=monsterid&s=45',
                comment:    'Outro teste de comentário123...',
                timestamp:  Date.now(),
                image: {
                    uniqueId:       1,
                    title:          'Teste de Imagem 1',
                    description:    '',
                    filename:       'sample1.jpg',
                    views:          0,
                    likes:          0,
                    timestamp:      Date.now
                }
            }
        ];

        return comments;
    }
};