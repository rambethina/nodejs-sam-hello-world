# nodejs-sam-hello-world

# Use CloudFormation to Package
```aws cloudformation package --template-file template.yaml --output-template-file cfn-transformed-template.yaml --s3-bucket <REPLACE_WITH_BUCKET_NAME>```

# Use CloudFormation to Deploy
```aws cloudformation deploy --template-file ./cfn-transformed-template.yaml --stack-name example-logs-processor --capabilities CAPABILITY_IAM```

# Package SAM template
```$ sam package --template-file template.yaml --s3-bucket <REPLACE_WITH_BUCKET_NAME> --output-template-file cfn-transformed-template.yaml```

# Deploy packaged SAM template
```$ sam deploy --template-file ./cfn-transformed-template.yaml --stack-name mystack --capabilities CAPABILITY_IAM```

# To run Locally
```sam local start-api```


#Additional Info

If you want to start a project from scratch

```sam init --name foobar --runtime nodejs8.10```

