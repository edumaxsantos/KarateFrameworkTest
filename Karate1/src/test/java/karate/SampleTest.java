package karate;

import com.intuit.karate.junit5.Karate;

public class SampleTest {

    /* @Karate.Test
    Karate testFullPath() {
        return Karate.run("classpath:karate/test1.feature").tags("@get");
    }

    @Karate.Test
    Karate testPostRecord() {
        return Karate.run("classpath:karate/test1.feature").tags("@Post-records");
    } */


    @Karate.Test
    Karate consultarProduto() {
        return Karate.run("classpath:karate/fakeapi.feature").tags("@Produto");
    }

}
