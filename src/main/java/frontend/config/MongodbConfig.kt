package frontend.config

import com.mongodb.MongoClient
import com.mongodb.MongoCredential
import com.mongodb.ServerAddress
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.mongodb.config.AbstractMongoConfiguration
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.SimpleMongoDbFactory
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories


@Configuration
@EnableMongoRepositories(basePackages = arrayOf("frontend.repository"))
open class MongodbConfig : AbstractMongoConfiguration() {
    @Value("\${mongodb.host}")
    private lateinit var mongohost: String

    @Value("\${mongodb.database}")
    private lateinit var mongoDatabaseName: String

    @Value("\${mongodb.username}")
    private lateinit var mongousername: String

    @Value("\${mongodb.password}")
    private lateinit var mongopassword: String

    @Value("\${mongodb.admindb}")
    private lateinit var mongoadminDb: String

    @Value("\${mongodb.auth}")
    private var mongoAuth = false


    override fun getDatabaseName(): String {
        return mongoDatabaseName
    }

    @Bean
    override fun mongoClient(): MongoClient {
        return if (mongoAuth) {
            val credantials: MongoCredential = MongoCredential.createCredential(mongousername, mongoadminDb, mongopassword.toCharArray())
            MongoClient(ServerAddress(mongohost), credantials, null)
        } else {
            MongoClient(mongohost)
        }
    }

    @Bean @Throws(Exception::class)
    override fun mongoTemplate(): MongoTemplate {
        return MongoTemplate(SimpleMongoDbFactory(mongoClient(), mongoDatabaseName), mappingMongoConverter())
    }
}
