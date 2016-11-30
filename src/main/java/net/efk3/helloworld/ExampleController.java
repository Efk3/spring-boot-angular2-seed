package net.efk3.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/example")
public class ExampleController {

    @GetMapping("")
    public String getHelloWorld() {
        return "Hello World!";
    }

}
