package ual.dra.artifact19;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cartas")
public class Cartas implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int card_id;
	
	@NotNull
    @Size(max = 10)
    @Column(name = "card_type")
    private String card_type;
	
	@NotNull
    @Size(max = 30)
    @Column(name = "illustrator")
    private String illustrator;
	
	@NotNull
    @Size(max = 10)
    @Column(name = "rarity")
    private String rarity;
	
	@NotNull
    @Size(max = 40)
    @Column(name = "item_def")
    private String item_def;
	
	@NotNull
    @Size(max = 45)
    @Column(name = "Cartascol")
    private String Cartascol;
	
	@OneToMany(mappedBy = "cartas")
    private List<CardName> cardName;
	
	@OneToMany(mappedBy = "cartas")
    private List<LargeImage> largeImage;
	
	 // Hibernate requires a no-arg constructor
    public Cartas() {

    }
    
    public Cartas(String card_type, String illustrator, String rarity, String item_def, String Cartascol ) {
        this.card_type = card_type;
        this.illustrator = illustrator;
        this.rarity = rarity;
        this.item_def = item_def; 
        this.Cartascol = Cartascol;
    }

	public int getCard_id() {
		return card_id;
	}

	public void setCard_id(int card_id) {
		this.card_id = card_id;
	}

	public String getCard_type() {
		return card_type;
	}

	public void setCard_type(String card_type) {
		this.card_type = card_type;
	}

	public String getIllustrator() {
		return illustrator;
	}

	public void setIllustrator(String illustrator) {
		this.illustrator = illustrator;
	}

	public String getRarity() {
		return rarity;
	}

	public void setRarity(String rarity) {
		this.rarity = rarity;
	}

	public String getItem_def() {
		return item_def;
	}

	public void setItem_def(String item_def) {
		this.item_def = item_def;
	}

	public String getCartascol() {
		return Cartascol;
	}

	public void setCartascol(String cartascol) {
		Cartascol = cartascol;
	}	

}
