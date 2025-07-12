package io.wisoft.java.chapter02;

public interface PasswordValidationRule {
    ValidationResult apply(String input);
}