package io.wisoft.java.chapter02;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("PasswordVerifierVariousInputTest Test")
class PasswordVerifierVariousInputTest {

    @Nested
    @DisplayName("When various uppercases exists")
    class PasswordRuleTest {

        @ParameterizedTest
        @CsvSource({
                "Abc,true",
                "aBc,true",
                "abC,true",
                "abc,false"
        })
        @DisplayName("should pass only when an uppercase letter exists")
        void verifiesOneUpperCaseRule(String input, boolean expected) {
            var result = oneUpperCaseRule.apply(input);
            assertThat(result.passed()).isEqualTo(expected);
        }

    }

    PasswordValidationRule oneUpperCaseRule = input -> new ValidationResult(!input.toLowerCase().equals(input), "at least one upper case needed");
}