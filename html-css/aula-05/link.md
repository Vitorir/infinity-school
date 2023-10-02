# https://www.invertexto.com/615aula05html

----------------------------------------------------------------------------------------------------------------

https://www.invertexto.com/615aula05html

----------------------------------------------------------------------------------------------------------------

LINK DA IMAGEM
https://drive.google.com/file/d/1r1-eW2t9DbybGzqHRmJfm1VLn8kKFEdM/view?usp=sharing


LINK DO PROJETO COMPLETO 
https://drive.google.com/drive/folders/1cwvF7eyyaDbAusV3jzGlppAY1oVcpe7b?usp=sharing

----------------------------------------------------------------------------------------------------------------
LINK DO PROJETO COMPLETO 
https://drive.google.com/drive/folders/1cwvF7eyyaDbAusV3jzGlppAY1oVcpe7b?usp=sharing

----------------------------------------------------------------------------------------------------------------
LINK DO PROJETO COMPLETO 
https://drive.google.com/drive/folders/1cwvF7eyyaDbAusV3jzGlppAY1oVcpe7b?usp=sharing
----------------------------------------------------------------------------------------------------------------
INDEX


<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="style/style.css">

        <title>Cadastro | Login </title>
    </head>
    <body>
        
            <div class="main-login">

                <div class="left-login">
                    <h1>Faça seu Login <br> E entre para o nosso time</h1>
                    <h1>Imagem</h1>
                </div>

                <div class="right-login">
                    <div class="card-login">
                        
                        <h1>Login</h1>

                        <div class="text-fild">
                            <label for="usuario">Usuário: </label>
                            <input type="text" name="usuario">
                        </div>

                        <div class="text-fild">
                            <label for="senha">Senha: </label>
                            <input type="password" name="senha">
                        </div>

                        <button class="bnt-login">Login</button>
                    </div>

                </div>

            </div>
    </body>
</html>



---------------------------------------------------------------
CSS

body{
    margin: 0;
}
.main-login{
    width: 100vw;
    height: 100vh;
    background: #000e38;
    display: flex; /*coloca um do lado do outro*/
    justify-content: center;/*centralizar*/
    align-items: center;/*centralizar e descer*/
}
.left-login{
    width: 50vw;
    height: 100vh;
    display: flex; /*coloca um do lado do outro*/
    justify-content: center;/*centralizar*/
    align-items: center;
    flex-direction: column;
}

.left-login > h1 {
    color: white; /*trocar a cor da div left*/
}

.right-login{
    width: 50vw; /*colocar a largura 50%*/
    height: 100vh; /*altura 100%*/
    display: flex; /*coloca um do lado do outro*/
    justify-content: center;/*centralizar*/
    align-items: center;
}

.card-login{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: #00435E;
    border-radius: 15px;
    box-shadow: 0px 0px  20px #00000056;
}   

.card-login > h1 {
    color: white;
    font-weight: 800;
    margin: 0;
}

.text-fild{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
}
 .text-fild > input{
width: 100%;/*lagura 100*/
border: none;/*sem borda*/
border-radius: 5px;/*borda redonda 10px*/
background: #226986;/*trocar o backgroud*/
color: #81D8FF;/*trocar a cor fa fonte*/
font-size: 12pt;/*tamanho da fonte*/
box-shadow: 0px 10px 40px #00000056;/*inseir sombra*/
outline: none;/*Tirar caixa de texto quadrada*/
box-sizing: border-box;/*deixar do tamanho da div*/
padding: 10px;
}





