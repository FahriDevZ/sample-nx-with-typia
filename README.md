# NxWithTypia

Test nx with typia(nestia actually)

To test run `nx serve api` and `nx serve service1` or `nx run-many -t serve api service1`

I separated the 'typia transform' plugin that is in tsconfig.base.json to the app's tsconfig.json because not all apps in the one I'm working on require 'strict' and 'strictNullCheck' to be true. So, I moved it to the app that uses 'typia'.

But strangely, every build process always receives the following information:

```
typia/lib/transform is not a Transformer Plugin. It does not provide neither before(), after(), nor afterDeclarations()
@nestia/core/lib/transform is not a Transformer Plugin. It does not provide neither before(), after(), nor afterDeclarations()
```

However, I don't mind it because I've checked the build results in the 'dist' directory and found no issues.

Test service1-e2e doest not work because idk how to setup e2e in microservice.
