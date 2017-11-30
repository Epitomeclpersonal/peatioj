package sample.config;

import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {

    private final ConnectionFactory rabbitConnectionFactory;

    @Autowired
    public RabbitConfig(ConnectionFactory rabbitConnectionFactory) {
        this.rabbitConnectionFactory = rabbitConnectionFactory;
    }

    @Bean
    public RabbitTemplate rubeExchangeTemplate() {
        RabbitTemplate r = new RabbitTemplate(rabbitConnectionFactory);
        return r;
    }
}