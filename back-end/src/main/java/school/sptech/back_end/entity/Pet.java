package school.sptech.back_end.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("PET")
public class Pet {

    @Id
    private Long id;

    private String nome;
    private String especie;
    private String raca;
    private Integer idade;
    private String curiosidade;

    // Construtor vazio (obrigatório para o Spring Data JDBC instanciar o objeto)
    public Pet() {
    }

    // Construtor cheio (com id) — útil quando o objeto já vem do banco
    public Pet(Long id, String nome, String especie, String raca, Integer idade, String curiosidade) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.curiosidade = curiosidade;
    }

    // Construtor sem id — útil para cadastrar um pet novo (id é gerado pelo banco)
    public Pet(String nome, String especie, String raca, Integer idade, String curiosidade) {
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.curiosidade = curiosidade;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEspecie() {
        return especie;
    }

    public void setEspecie(String especie) {
        this.especie = especie;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getCuriosidade() {
        return curiosidade;
    }

    public void setCuriosidade(String curiosidade) {
        this.curiosidade = curiosidade;
    }
}
