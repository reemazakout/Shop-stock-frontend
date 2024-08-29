import { z } from "zod";

const signinSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(50, { message: "Name is too long" }),

    phone: z.string().regex(/^\d{9,20}$/, {
      message: "Phone number must be between 9 and 20 digits",
    }),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .max(50, { message: "Email is too long" })
      .email("Invalid email address"),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(50, { message: "Password is too long" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
      ),
    rePassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters" })
      .max(50, { message: "Confirm Password is too long" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        {
          message:
            "Confirm Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
      ),
  })
  .refine((input) => input.password === input.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

type TInputs = z.infer<typeof signinSchema>;

export { signinSchema, type TInputs };
