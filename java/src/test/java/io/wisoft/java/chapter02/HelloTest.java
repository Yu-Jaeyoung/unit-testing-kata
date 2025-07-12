package io.wisoft.java.chapter02;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

class HelloTest {
    @Test
    void hello() {
        Hello hello = new Hello();

        assertThat(hello.hello()).isEqualTo("hello");
        assertThat(hello.hello()).isNotEqualTo("goodbye");
    }

    @Test
    void helloJUnit() {
        String expected = "Hello JUnit";
        assertThat(expected).isEqualTo("Hello JUnit");
        assertEquals("Hello JUnit", expected);
    }
}