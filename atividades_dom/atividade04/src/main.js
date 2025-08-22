import { adicionarEventoBotao } from './utils/utils.js';
import { calcularParImpar } from './modulos/parImpar.js';
import { calcularMaiorMenor } from './modulos/maiorMenor.js';
import { verificarVelocidade } from './modulos/velocidade.js';
import { verificarSalario } from './modulos/salario.js';
import { calcularPassagem } from './modulos/passagem.js';
import { calcularAnoBissexto } from './modulos/anoBissexto.js';
import { verificarTriangulo } from './modulos/triangulo.js';
import { calcularEquacao } from './modulos/equacao.js';

// Adicionando os eventos de clique
adicionarEventoBotao('botao-par-impar', calcularParImpar);
adicionarEventoBotao('botao-maior-menor', calcularMaiorMenor);
adicionarEventoBotao('botao-velocidade', verificarVelocidade);
adicionarEventoBotao('botao-salario', verificarSalario);
adicionarEventoBotao('botao-passagem', calcularPassagem);
adicionarEventoBotao('botao-ano', calcularAnoBissexto);
adicionarEventoBotao('botao-triangulo', verificarTriangulo);
adicionarEventoBotao('botao-equacao', calcularEquacao);