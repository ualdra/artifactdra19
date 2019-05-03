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
public class Carta implements Serializable {
	@Id
	private Long id;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "card_type")
    private String card_type;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "illustrator")
    private String illustrator;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "rarity")
    private String rarity;
	
	@NotNull
    @Size(max = 255)
    @Column(name = "item_def")
    private int item_def;
	
	
	@OneToMany(mappedBy = "carta")
    private List<CardName> cardNames;
	
	@OneToMany(mappedBy = "carta")
    private List<LargeImage> largeImages;
	
	 // Hibernate requires a no-arg constructor
    public Carta() {

    }
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<CardName> getCardNames() {
		return cardNames;
	}

	public void setCardNames(List<CardName> cardNames) {
		this.cardNames = cardNames;
	}

	public List<LargeImage> getLargeImages() {
		return largeImages;
	}

	public void setLargeImages(List<LargeImage> largeImages) {
		this.largeImages = largeImages;
	}

	public Carta(String card_type, String illustrator, String rarity, int item_def ) {
        this.card_type = card_type;
        this.illustrator = illustrator;
        this.rarity = rarity;
        this.item_def = item_def; 
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

	public int getItem_def() {
		return item_def;
	}

	public void setItem_def(int item_def) {
		this.item_def = item_def;
	}


}
