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
 * Documents generated by hbm2java
 */
@Entity
@Table(name="documents"
)
public class Documents  implements java.io.Serializable {


     private int id;
     private String key;
     private String title;
     private String body;
     private Boolean isAuth;
     private Date createdAt;
     private Date updatedAt;
     private String desc;
     private String keywords;

    public Documents() {
    }

	
    public Documents(int id) {
        this.id = id;
    }
    public Documents(int id, String key, String title, String body, Boolean isAuth, Date createdAt, Date updatedAt, String desc, String keywords) {
       this.id = id;
       this.key = key;
       this.title = title;
       this.body = body;
       this.isAuth = isAuth;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.desc = desc;
       this.keywords = keywords;
    }
   
     @Id 

    
    @Column(name="id", unique=true, nullable=false)
    public int getId() {
        return this.id;
    }
    
    public void setId(int id) {
        this.id = id;
    }

    
    @Column(name="key")
    public String getKey() {
        return this.key;
    }
    
    public void setKey(String key) {
        this.key = key;
    }

    
    @Column(name="title")
    public String getTitle() {
        return this.title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }

    
    @Column(name="body", length=65535)
    public String getBody() {
        return this.body;
    }
    
    public void setBody(String body) {
        this.body = body;
    }

    
    @Column(name="is_auth")
    public Boolean getIsAuth() {
        return this.isAuth;
    }
    
    public void setIsAuth(Boolean isAuth) {
        this.isAuth = isAuth;
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

    
    @Column(name="desc", length=65535)
    public String getDesc() {
        return this.desc;
    }
    
    public void setDesc(String desc) {
        this.desc = desc;
    }

    
    @Column(name="keywords", length=65535)
    public String getKeywords() {
        return this.keywords;
    }
    
    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }




}


