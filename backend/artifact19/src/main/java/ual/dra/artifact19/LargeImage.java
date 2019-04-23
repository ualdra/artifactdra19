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
@Table(name = "largeImage")
public class LargeImage implements Serializable {
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	
	@NotNull
    @Size(max = 30)
    @Column(name = "value_")
    private String value_;
	
	@NotNull
    @Size(max = 30)
    @Column(name = "lang")
    private String lang;
	
	@ManyToOne
    @JoinColumn(name="card_id")
	private Cartas cartas;
	
	// Hibernate requires a no-arg constructor
    public LargeImage() {

    }
    
    public LargeImage(String value_, String lang) {
        this.value_ = value_; 
        this.lang = lang;
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

	public Cartas getCartas() {
		return cartas;
	}

	public void setCartas(Cartas cartas) {
		this.cartas = cartas;
	}

}
