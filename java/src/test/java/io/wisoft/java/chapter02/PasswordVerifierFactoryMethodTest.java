package io.wisoft.java.chapter02;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("PasswordVerifierFactoryMethodTest Test")
class PasswordVerifierFactoryMethodTest {

    PasswordVerifier makeVerifier() {
        return new PasswordVerifier();
    }

    PasswordVerifier makeVerifierWithPassingRules() {
        var verifier = makeVerifier();

        verifier.addRules(passingRule);

        return verifier;
    }

    PasswordVerifier makeVerifierWithFailingRules() {
        var verifier = makeVerifier();

        verifier.addRules(failingRule);

        return verifier;
    }

    PasswordVerifier makeVerifierWithMixedRules() {
        var verifier = makeVerifier();

        verifier.addRules(passingRule);
        verifier.addRules(failingRule);
        verifier.addRules(anotherFailingRule);

        return verifier;
    }

    @Nested
    @DisplayName("When a rule fails")
    class FailingRuleScenario {

        @Test
        @DisplayName("has an error message based on the rule's reason")
        void hasErrorMessageBasedOnRuleReason() {
            var verifier = makeVerifierWithFailingRules();

            List<String> errors = verifier.verifyPassword("any value");

            assertThat(errors).hasSize(1);
            assertThat(errors.getFirst()).contains("fake reason");
        }

        @Test
        @DisplayName("has exactly one error")
        void hasExactlyOneError() {
            var verifier = makeVerifierWithFailingRules();

            List<String> errors = verifier.verifyPassword("any value");

            assertThat(errors).hasSize(1);
        }
    }

    @Nested
    @DisplayName("When all rules pass")
    class PassingRuleScenario {

        @Test
        @DisplayName("should return no errors")
        void shouldReturnNoErrors() {
            var verifier = makeVerifierWithPassingRules();

            List<String> errors = verifier.verifyPassword("validPassword123");

            assertThat(errors).isEmpty();
        }

        @Test
        @DisplayName("should handle multiple passing rules")
        void shouldHandleMultiplePassingRules() {
            var verifier = makeVerifierWithPassingRules();

            List<String> errors = verifier.verifyPassword("validPassword123");

            assertThat(errors).isEmpty();
        }
    }

    @Nested
    @DisplayName("When a mix of passing and failing rules exist")
    class MixedRulesScenario {

        @Test
        @DisplayName("should return only errors from failing rules")
        void shouldReturnOnlyErrorsFromFailingRules() {
            var verifier = makeVerifierWithMixedRules();

            List<String> errors = verifier.verifyPassword("any value");

            assertThat(errors).hasSize(2);
            assertThat(errors).containsExactlyInAnyOrder("error fake reason", "error another fake reason");
        }
    }

    PasswordValidationRule failingRule = input -> new ValidationResult(false, "fake reason");
    PasswordValidationRule passingRule = input -> new ValidationResult(true, "");
    PasswordValidationRule anotherFailingRule = input -> new ValidationResult(false, "another fake reason");
}