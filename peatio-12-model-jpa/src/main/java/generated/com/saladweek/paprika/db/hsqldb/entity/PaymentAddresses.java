package generated.com.saladweek.paprika.db.hsqldb.entity;
// Generated 2018. 2. 7 오전 6:10:08 by Hibernate Tools 5.0.6.Final


import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * PaymentAddresses generated by hbm2java
 */
@Entity
@Table(name="payment_addresses"
)
public class PaymentAddresses  implements java.io.Serializable {


     private int id;
     private Integer accountId;
     private String address;
     private Date createdAt;
     private Date updatedAt;
     private Integer currency;

    public PaymentAddresses() {
    }

	
    public PaymentAddresses(int id) {
        this.id = id;
    }
    public PaymentAddresses(int id, Integer accountId, String address, Date createdAt, Date updatedAt, Integer currency) {
       this.id = id;
       this.accountId = accountId;
       this.address = address;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.currency = currency;
    }
   
     @Id 

    
    @Column(name="id", unique=true, nullable=false)
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

    
    @Column(name="account_id")
    public Integer getAccountId() {
        return this.accountId;
    }
    
    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    
    @Column(name="address")
    public String getAddress() {
        return this.address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_at", length=19)
    public Date getCreatedAt() {
        return this.createdAt;
    }
    
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="updated_at", length=19)
    public Date getUpdatedAt() {
        return this.updatedAt;
    }
    
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    
    @Column(name="currency")
    public Integer getCurrency() {
        return this.currency;
    }
    
    public void setCurrency(Integer currency) {
        this.currency = currency;
    }




}


