<script setup>
import { ref } from 'vue'
import catImg from '../assets/cat.png'

const novoRelato = ref({
  nome: '',
  local: '',
  urgencia: 'Resgate & Alimentação',
  descricao: ''
})

const relatos = ref([
  {
    id: 1,
    titulo: 'Ninhada de 3 gatinhos resgatados próximo ao Campus Central',
    local: 'Mossoró/RN • Bairro Presidente Costa e Silva',
    status: 'Lar Temporário Garantido',
    statusClass: 'tag-green',
    cuidador: 'Dra. Carla Souza (Protetora Independente)',
    tempo: 'Há 25 minutos',
    apoios: 34,
    comentarios: 12,
    foto: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80',
    resumo: 'Resgatados com segurança após alerta na rede ResPets! Já passaram por avaliação veterinária, estão vermifugados e aguardam adoção responsável.'
  },
  {
    id: 2,
    titulo: 'Cão dócil de porte médio avistado precisando de hidratação e abrigo',
    local: 'Natal/RN • Capim Macio (Próximo à Av. Roberto Freire)',
    status: 'Monitoramento Ativo',
    statusClass: 'tag-amber',
    cuidador: 'Grupo Voluntário Patas do Sol',
    tempo: 'Há 1 hora',
    apoios: 52,
    comentarios: 19,
    foto: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80',
    resumo: 'Colocamos comedouro e água fresca no ponto de apoio. Precisamos de carona solidária até a clínica parceira hoje às 16h.'
  },
  {
    id: 3,
    titulo: 'Gatinha sialata dócil castrada disponível para adoção responsável',
    local: 'Mossoró/RN • Nova Betânia',
    status: 'Disponível p/ Adoção',
    statusClass: 'tag-blue',
    cuidador: 'Abrigo Amigo Fiel',
    tempo: 'Há 3 horas',
    apoios: 68,
    comentarios: 9,
    foto: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80',
    resumo: 'Muito carinhosa, acostumada com apartamento e outros gatos. Vacinação em dia e acompanhamento pós-adoção.'
  }
])
</script>

<template>
  <main class="respets-main">
    <section class="hero-banner">
      <div class="hero-text">
        <span class="eyebrow">🧡 Rede Social Sem Fins Lucrativos</span>
        <h1>Conectando cuidadores e voluntários pela proteção de animais vulneráveis</h1>
        <p>
          Monitore pontos de alimentação, acione resgates colaborativos, organize lares temporários e impulsione feiras de adoção na sua cidade.
        </p>
        <div class="hero-metrics">
          <div class="metric">
            <strong>142+</strong>
            <span>Animais resgatados</span>
          </div>
          <div class="metric">
            <strong>38</strong>
            <span>Pontos de apoio ativos</span>
          </div>
          <div class="metric">
            <strong>96%</strong>
            <span>Taxa de adoção segura</span>
          </div>
        </div>
      </div>
      <div class="hero-form-card">
        <h3>📍 Registrar Alerta ou Ponto de Apoio</h3>
        <p>Avistou um animal em situação vulnerável? Notifique cuidadores próximos.</p>
        <div class="form-group">
          <label>Identificação / Espécie</label>
          <input v-model="novoRelato.nome" type="text" placeholder="Ex: Cão caramelo porte médio / Gatinho filhote" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Bairro / Referência</label>
            <input v-model="novoRelato.local" type="text" placeholder="Ex: Campus UERN, Bloco B" />
          </div>
          <div class="form-group">
            <label>Necessidade Principal</label>
            <select v-model="novoRelato.urgencia">
              <option>Resgate & Alimentação</option>
              <option>Lar Temporário</option>
              <option>Atendimento Veterinário</option>
              <option>Adoção Responsável</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Observações do Monitoramento</label>
          <textarea v-model="novoRelato.descricao" rows="2" placeholder="Descreva o estado do animal e como voluntários podem ajudar..."></textarea>
        </div>
        <button type="button" class="btn-submit">Publicar Alerta na Rede Solidária</button>
      </div>
    </section>

    <section class="feed-section">
      <div class="section-head">
        <div>
          <h2>Mural Comunitário de Monitoramento & Resgate</h2>
          <p>Atualizações em tempo real enviadas por protetores e voluntários</p>
        </div>
        <div class="filter-pills">
          <span class="pill active">Todos (24)</span>
          <span class="pill">Urgentes (5)</span>
          <span class="pill">Lar Temporário (8)</span>
          <span class="pill">Para Adoção (11)</span>
        </div>
      </div>

      <div class="cards-grid">
        <article v-for="item in relatos" :key="item.id" class="pet-card">
          <div class="pet-img-wrap">
            <img :src="item.foto" :alt="item.titulo" />
            <span :class="['status-badge', item.statusClass]">{{ item.status }}</span>
          </div>
          <div class="pet-body">
            <div class="pet-meta">
              <span>📍 {{ item.local }}</span>
              <span>• {{ item.tempo }}</span>
            </div>
            <h3>{{ item.titulo }}</h3>
            <p>{{ item.resumo }}</p>
            <div class="pet-footer">
              <div class="cuidador-info">
                <strong>{{ item.cuidador }}</strong>
              </div>
              <div class="pet-actions">
                <button type="button" class="btn-action">🐾 Apoiar ({{ item.apoios }})</button>
                <button type="button" class="btn-action primary">Oferecer Ajuda</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.respets-main {
  max-width: 1240px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem 1.5rem;
}

.hero-banner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  align-items: center;
  background: linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%);
  border: 1px solid #fed7aa;
  border-radius: 24px;
  padding: 2.25rem;
  margin-bottom: 2.5rem;
  box-shadow: 0 12px 32px rgba(234, 88, 12, 0.08);
}

.eyebrow {
  display: inline-block;
  background: #ffffff;
  color: #c2410c;
  font-weight: 700;
  font-size: 0.78rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 0.85rem;
  border: 1px solid #fdba74;
}

.hero-text h1 {
  font-size: 2.05rem;
  font-weight: 800;
  color: #431407;
  line-height: 1.22;
  margin: 0 0 0.85rem 0;
  letter-spacing: -0.02em;
}

.hero-text p {
  font-size: 1rem;
  color: #7c2d12;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.hero-metrics {
  display: flex;
  gap: 1.5rem;
}

.metric {
  background: rgba(255, 255, 255, 0.85);
  padding: 0.85rem 1.15rem;
  border-radius: 14px;
  border: 1px solid #fed7aa;
}

.metric strong {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  color: #ea580c;
}

.metric span {
  font-size: 0.78rem;
  color: #78350f;
  font-weight: 600;
}

.hero-form-card {
  background: #ffffff;
  padding: 1.65rem;
  border-radius: 20px;
  border: 1px solid #fed7aa;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
}

.hero-form-card h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: #1e293b;
}

.hero-form-card p {
  margin: 0 0 1rem 0;
  font-size: 0.82rem;
  color: #64748b;
}

.form-group {
  margin-bottom: 0.75rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.form-group label {
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  color: #475569;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.55rem 0.75rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 0.85rem;
  font-family: inherit;
}

.btn-submit {
  width: 100%;
  background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.25rem;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-head h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
}

.section-head p {
  margin: 0.25rem 0 0 0;
  font-size: 0.92rem;
  color: #64748b;
}

.filter-pills {
  display: flex;
  gap: 0.5rem;
}

.pill {
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  color: #475569;
}

.pill.active {
  background: #ea580c;
  color: #ffffff;
  border-color: #ea580c;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pet-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
}

.pet-img-wrap {
  position: relative;
  height: 200px;
}

.pet-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.tag-green {
  background: #dcfce7;
  color: #15803d;
}

.tag-amber {
  background: #fef3c7;
  color: #b45309;
}

.tag-blue {
  background: #e0f2fe;
  color: #0369a1;
}

.pet-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.pet-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.pet-body h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  line-height: 1.38;
}

.pet-body p {
  font-size: 0.86rem;
  color: #475569;
  line-height: 1.55;
  margin: 0 0 1rem 0;
  flex: 1;
}

.pet-footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.cuidador-info strong {
  font-size: 0.78rem;
  color: #334155;
}

.pet-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-action {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  color: #334155;
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
}

.btn-action.primary {
  background: #ea580c;
  color: #ffffff;
  border-color: #ea580c;
}
</style>
