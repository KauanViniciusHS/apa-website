"use client"
import SitePage from "../components/page_type/site"
import { TextBoxContainer, TextBox } from './TextBoxComponents.jsx'; 

export default function Historia() {
  return (
    <SitePage>
      <main>
        <h1>História</h1>
        <TextBoxContainer>
          <img
            src="/Images/Projeto pipoca.jpg"
            alt="Descrição da Imagem"
            width={400} // Defina a largura desejada em pixels
            height={300} // Defina a altura desejada em pixels
          />
          <TextBox>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem qui pariatur sunt ea ratione quae saepe animi laudantium doloribus perferendis maiores enim reiciendis quasi nostrum eveniet, atque incidunt delectus voluptates.</p>
          </TextBox>
        </TextBoxContainer>
      </main>
    </SitePage>
  )
}
