package io.wisoft.java.chapter02;

import java.util.ArrayList;
import java.util.List;

public class PasswordVerifier {

    private final List<PasswordValidationRule> rules;

    public PasswordVerifier() {
        this.rules = new ArrayList<>();
    }

    public void addRules(PasswordValidationRule rule) {
        rules.add(rule);
    }

    public List<String> verifyPassword(String input) {
        List<String> errors = new ArrayList<>();

        for (PasswordValidationRule rule : rules) {
            ValidationResult result = rule.apply(input);

            if (!result.passed()) {
                errors.add("error " + result.reason());
            }
        }

        return errors;
    }
}