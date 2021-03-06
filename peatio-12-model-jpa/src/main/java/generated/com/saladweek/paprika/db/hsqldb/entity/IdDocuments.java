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
 * IdDocuments generated by hbm2java
 */
@Entity
@Table(name="id_documents"
)
public class IdDocuments  implements java.io.Serializable {


     private int id;
     private Integer idDocumentType;
     private String name;
     private String idDocumentNumber;
     private Integer memberId;
     private Date createdAt;
     private Date updatedAt;
     private Date birthDate;
     private String address;
     private String city;
     private String country;
     private String zipcode;
     private Integer idBillType;
     private String aasmState;

    public IdDocuments() {
    }

	
    public IdDocuments(int id) {
        this.id = id;
    }
    public IdDocuments(int id, Integer idDocumentType, String name, String idDocumentNumber, Integer memberId, Date createdAt, Date updatedAt, Date birthDate, String address, String city, String country, String zipcode, Integer idBillType, String aasmState) {
       this.id = id;
       this.idDocumentType = idDocumentType;
       this.name = name;
       this.idDocumentNumber = idDocumentNumber;
       this.memberId = memberId;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.birthDate = birthDate;
       this.address = address;
       this.city = city;
       this.country = country;
       this.zipcode = zipcode;
       this.idBillType = idBillType;
       this.aasmState = aasmState;
    }
   
     @Id 

    
    @Column(name="id", unique=true, nullable=false)
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

    
    @Column(name="id_document_type")
    public Integer getIdDocumentType() {
        return this.idDocumentType;
    }
    
    public void setIdDocumentType(Integer idDocumentType) {
        this.idDocumentType = idDocumentType;
    }

    
    @Column(name="name")
    public String getName() {
        return this.name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    
    @Column(name="id_document_number")
    public String getIdDocumentNumber() {
        return this.idDocumentNumber;
    }
    
    public void setIdDocumentNumber(String idDocumentNumber) {
        this.idDocumentNumber = idDocumentNumber;
    }

    
    @Column(name="member_id")
    public Integer getMemberId() {
        return this.memberId;
    }
    
    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
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

    @Temporal(TemporalType.DATE)
    @Column(name="birth_date", length=10)
    public Date getBirthDate() {
        return this.birthDate;
    }
    
    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    
    @Column(name="address", length=65535)
    public String getAddress() {
        return this.address;
    }
    
    public void setAddress(String address) {
        this.address = address;
    }

    
    @Column(name="city")
    public String getCity() {
        return this.city;
    }
    
    public void setCity(String city) {
        this.city = city;
    }

    
    @Column(name="country")
    public String getCountry() {
        return this.country;
    }
    
    public void setCountry(String country) {
        this.country = country;
    }

    
    @Column(name="zipcode")
    public String getZipcode() {
        return this.zipcode;
    }
    
    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    
    @Column(name="id_bill_type")
    public Integer getIdBillType() {
        return this.idBillType;
    }
    
    public void setIdBillType(Integer idBillType) {
        this.idBillType = idBillType;
    }

    
    @Column(name="aasm_state")
    public String getAasmState() {
        return this.aasmState;
    }
    
    public void setAasmState(String aasmState) {
        this.aasmState = aasmState;
    }




}


