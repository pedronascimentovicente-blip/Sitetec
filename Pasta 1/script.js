// Aguarda o carregamento do DOM antes de executar
document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('article');

    articles.forEach(article => {
        // Efeito visual ao passar o mouse sobre o card
        article.addEventListener('mouseenter', () => {
            article.style.transform = 'scale(1.01)';
            article.style.transition = 'transform 0.2s ease-in-out';
        });

        article.addEventListener('mouseleave', () => {
            article.style.transform = 'scale(1)';
        });
    });

    console.log('Blog Tech carregado e pronto!');
});

