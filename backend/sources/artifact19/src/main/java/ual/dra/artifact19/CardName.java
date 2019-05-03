package ual.dra.artifact19;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class CardName implements Serializable {
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "value_")
    private String value_;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "lang")
    private String lang;
	
	@ManyToOne
    @JoinColumn
	private Carta carta;
	
	// Hibernate requires a no-arg constructor
    public CardName() {

    }
    
    public CardName(String value_, String lang) {
        this.value_ = value_; 
        this.lang = lang;  
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Carta getCarta() {
		return carta;
	}

	public void setCarta(Carta carta) {
		this.carta = carta;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getValue_() {
		return value_;
	}

	public void setValue_(String value_) {
		this.value_ = value_;
	}

    

}
