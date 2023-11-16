// TextBoxComponents.jsx
import styled from 'styled-components';

export const TextBoxContainer = styled.div`
  display: flex;
  justify-content: center; // Centraliza o conteúdo horizontalmente
  align-items: center; // Centraliza o conteúdo verticalmente
`;

export const TextBox = styled.div`
  background-color: #000000; // Cor de fundo da caixa de texto
  color: #ffffff; // Cor do texto
  padding: 70px; // Espaçamento interno da caixa de texto
  width: 400px; // Largura da caixa de texto
  display: flex; // Torna a caixa de texto um contêiner flexível
  justify-content: center; // Centraliza o conteúdo horizontalmente
  align-items: center; // Centraliza o conteúdo verticalmente
  margin-left: 20px; // Adiciona uma margem à esquerda da caixa de texto
`;
